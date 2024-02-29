import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import routes from "routes.js";
import SubMenu from "components/submenus/subMenu";
import NFTMarketplace from "views/admin/marketplace";
import TopBar from "views/admin/questions/components/TopBar";
import Comprehension from "views/admin/comprehension";
import UsersMain from "views/admin/manage-users/users";
import USerGroup from "views/admin/manage-users/user-groups";
import UserRoles from "views/admin/manage-users/roles-permissions";
import TagsList from "views/admin/manage-categories/tags";
import SubCategories from "views/admin/manage-categories/sub-categories";
import CategoriesList from "views/admin/manage-categories/categories";
import Section from "views/admin/section";
import Tag from "views/admin/tag";
import Topic from "views/admin/topic";
import MSAQuestionAdder from "views/admin/question-types/msa-questions";
import EditingFunctionalityLayout from "views/admin/question-types/msa-questions/layouts/editing-functionality";
import ManageQuizzes from "views/admin/quizzes";
import Receipt from "components/receiptScreen";

export default function Admin(props) {
  let subMenuIndex = 0;
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="flex w-full min-h-screen bg-custom-accentColor dark:bg-[#1e1e1e] ">
        {open ? (
          <div className=" m-0 xl:min-w-[240px] min-h-screen">
            <Sidebar open={open} onClose={() => setOpen(false)} />
          </div>
        ) : (
          <></>
        )}

        <div className="w-full">
          {/* Main Content */}
          <main
            className={`min-h-screen bg-white dark:!bg-[#111111] flex-none transition-all md:pr-2 `}
          >
            {/* Routes */}
            <div className="min-h-screen ml-[12px] ">
              <Navbar
                onOpenSidenav={() => setOpen(true)}
                logoText={"UpStartPrep"}
                brandText={currentRoute}
                secondary={getActiveNavbar(routes)}
                {...rest}
              />

              <div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 ml-[12px]  ">
                {/* <Outlet /> */}
                <Routes>
                  {getRoutes(routes)}

                  <Route
                    path="/"
                    element={<Navigate to="/admin/default" replace />}
                  />

                  <Route
                    path="questions/create/msa-questions"
                    element={
                      <>
                        <MSAQuestionAdder />
                      </>
                    }
                  />
                  <Route
                    path="questions/show"
                    element={
                      <>
                        <TopBar />
                        <SubMenu />
                      </>
                    }
                  />
                  <Route path="comprehension" element={<Comprehension />} />
                  <Route path="users-main" element={<UsersMain />} />
                  <Route path="users-group" element={<USerGroup />} />
                  <Route path="users-roles" element={<UserRoles />} />
                  <Route path="categories-main" element={<CategoriesList />} />
                  <Route path="categories-sub" element={<SubCategories />} />
                  <Route path="categories-tag" element={<TagsList />} />
                  <Route path="section" element={<Section />} />
                  <Route path="section-tag" element={<Tag />} />
                  <Route path="section-topic" element={<Topic />} />
                  <Route path="manage-quizes" element={<ManageQuizzes />} />
                  <Route path="manage-lesson" element={<NFTMarketplace />} />
                  <Route path="receipt" element={< Receipt/>} />

                  <Route
                    path="questions/import"
                    element={
                      <>
                        <TopBar />
                      </>
                    }
                  />

                  <Route
                    path="/questions/:id/edit"
                    element={
                      <>
                        <EditingFunctionalityLayout />
                      </>
                    }
                  />
                </Routes>
              </div>
              <div className="p-3"></div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
