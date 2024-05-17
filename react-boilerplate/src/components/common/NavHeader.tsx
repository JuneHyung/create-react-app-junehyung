import { PathList } from '@/models/path';
import { Link } from 'react-router-dom';

type NavHeaderProps = {
  pathList: PathList;
};
const NavHeader = ({ pathList }: NavHeaderProps) => {
  return (
    <header className="nav-header">
      {pathList.map((link) => {
        return (
          <Link key={link.path} to={link.path}>
            {link.label}
          </Link>
        );
      })}
    </header>
  );
};

export default NavHeader;
