import Link from 'next/link'

const Header = () => {
  return (
    <>
      <ul>
        <li><Link href="/">Index</Link></li>
        <li><Link href="/user">User</Link></li>
        <li><Link href="/list">List</Link></li>
        <li><Link href="/counter">Counter</Link></li>
      </ul>
      <h2>등급 : 일반유저 | 로그인 상태입니다.</h2>
      <h4>메타마스크로 로그인 처리함.</h4>
    </>
  );
};

export default Header;
