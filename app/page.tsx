// File: app/page.tsx
import { fetchRevenue } from './lib/data';

export default async function Page() {
  const revenue = await fetchRevenue()
  console.log(revenue)

  return (
    <form >
      <input type="text" placeholder="write a comment" name="comment" />
      <button type="submit">Submit</button>
    </form>
  );
}