-- Add onboarded column to profiles
alter table public.profiles add column if not exists onboarded boolean default false not null;

-- Mark existing users as onboarded if they have changed their name from the default "user1234..."
-- Or just mark everyone currently existing as true so they don't get bothered
update public.profiles set onboarded = true;
