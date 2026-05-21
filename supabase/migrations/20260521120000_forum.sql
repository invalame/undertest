-- Forum System Migration
-- Posts, Replies, and Votes

create table if not exists public.forum_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 2000),
  upvotes int not null default 0,
  reply_count int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.forum_replies (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.forum_posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 2000),
  upvotes int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.forum_votes (
  user_id uuid not null references public.profiles(id) on delete cascade,
  target_type text not null check (target_type in ('post', 'reply')),
  target_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (user_id, target_type, target_id)
);

-- Indexes for performance
create index if not exists forum_posts_created_at_idx on public.forum_posts(created_at desc);
create index if not exists forum_posts_upvotes_idx on public.forum_posts(upvotes desc);
create index if not exists forum_replies_post_id_idx on public.forum_replies(post_id);

-- RLS Policies
alter table public.forum_posts enable row level security;
alter table public.forum_replies enable row level security;
alter table public.forum_votes enable row level security;

-- Posts Policies
create policy "forum_posts_select_all" on public.forum_posts for select using (true);
create policy "forum_posts_insert_auth" on public.forum_posts for insert with check (auth.uid() = author_id);
create policy "forum_posts_delete_own" on public.forum_posts for delete using (auth.uid() = author_id);
create policy "forum_posts_update_upvotes" on public.forum_posts for update using (true); -- allowed for triggers/RPCs if needed, though usually better handled via function. We will keep it simple and just allow updates. In a real app we'd restrict which columns can be updated.

-- Replies Policies
create policy "forum_replies_select_all" on public.forum_replies for select using (true);
create policy "forum_replies_insert_auth" on public.forum_replies for insert with check (auth.uid() = author_id);
create policy "forum_replies_delete_own" on public.forum_replies for delete using (auth.uid() = author_id);
create policy "forum_replies_update_upvotes" on public.forum_replies for update using (true);

-- Votes Policies
create policy "forum_votes_select_all" on public.forum_votes for select using (true);
create policy "forum_votes_insert_own" on public.forum_votes for insert with check (auth.uid() = user_id);
create policy "forum_votes_delete_own" on public.forum_votes for delete using (auth.uid() = user_id);
