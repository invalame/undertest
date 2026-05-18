-- Biografía: hasta ~320 palabras (respaldo por caracteres).
alter table public.profiles
  drop constraint if exists profiles_bio_check;

alter table public.profiles
  add constraint profiles_bio_check
  check (char_length(bio) <= 4000);
