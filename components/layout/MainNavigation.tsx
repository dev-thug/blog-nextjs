// |이 코드는 Next.js에서 사용되는 메인 네비게이션 컴포넌트입니다.
// |
// |좋은 점:
// |- Link 컴포넌트를 사용하여 클라이언트 측 라우팅을 구현하고 있습니다. 이를 통해 페이지 전환 시 새로고침 없이 빠르게 화면을 전환할 수 있습니다.
// |- CSS 모듈을 사용하여 CSS 클래스 이름 충돌을 방지하고, 컴포넌트 스타일링을 쉽게 할 수 있습니다.
// |- 의미 있는 태그를 사용하여 웹 접근성을 고려하고 있습니다.
// |
// |나쁜 점:
// |- Link 컴포넌트의 href 속성 값으로 문자열을 직접 입력하고 있습니다. 이는 오타 등의 실수가 발생할 가능성이 있으므로, 상수나 변수를 사용하는 것이 좋습니다.
// |

import Link from 'next/link';
import Logo from './Logo';
import classes from './main-navigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href={'/'} legacyBehavior>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
