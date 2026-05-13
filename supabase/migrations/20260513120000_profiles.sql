-- Perfiles UnderLess: ejecutá este SQL en el editor SQL de Supabase (o con la CLI).
-- Plan gratuito: tablas chicas + RLS; sin funciones pesadas.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  username text not null unique
    check (username ~ '^[a-z0-9_]{3,24}$'),
  bio text not null default ''::text
    check (char_length(bio) <= 500),
  avatar_path text
    check (avatar_path is null or char_length(avatar_path) <= 120),
  underium bigint not null default 0
    check (underium >= 0),
  max_streak integer not null default 0
    check (max_streak >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists profiles_username_lower_idx on public.profiles (lower(username));

alter table public.profiles enable row level security;

drop policy if exists "profiles_select_all" on public.profiles;
create policy "profiles_select_all"
  on public.profiles for select
  using (true);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);
