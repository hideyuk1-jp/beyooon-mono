import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>HOME</h1>
      <ul>
        <li>About</li>
        <li>
          <Link href="blog">Blog</Link>
        </li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};
export default Home;
