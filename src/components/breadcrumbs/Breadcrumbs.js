import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...pathSegments.map((segment, index) => ({
      name: segment.replace(/-/g, " "),
      path: `/${pathSegments.slice(0, index + 1).join("/")}`,
    })),
  ];

  return (
    <nav className="breadcrumb">
    {breadcrumbs.map((crumb, index) => {
      const isSerumSet = crumb.path.startsWith("/serums/") && crumb.path.split("/").length === 3;
      const isLastCrumb = index === breadcrumbs.length - 1;

      return isSerumSet ? (
        // Ссылка ведет на нужную секцию `SerumsPage`
        <a key={crumb.path} href={`/serums#${crumb.path.split("/")[2]}`} className="breadcrumb-text">
          {crumb.name}
        </a>
      ) : (
        <Link
          key={crumb.path}
          to={crumb.path}
          className={isLastCrumb ? "active" : ""}
        >
          {crumb.name}
        </Link>
      );
    })}
  </nav>
  );
};

export default Breadcrumbs;
