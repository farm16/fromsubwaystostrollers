import React from "react";

const tmpContent = [
  {
    postTitle: "Title of Post",
    postDesc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
  },
  {
    postTitle: "Title of Post",
    postDesc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
  },
  {
    postTitle: "Title of Post",
    postDesc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`
  }
];

function RecentPosts() {
  return (
    <div style={{ flex: "50%" }}>
      {tmpContent.map((post, i) => {
        return (
          <div className="recentPost" key={i}>
            <div className="recentPost__image">
              <img
                className={"recentPost__image__" + i}
                src="https://via.placeholder.com/220?text=Side+Picture"
              ></img>
            </div>

            <div className="recentPost__description">
              <h1>{post.postTitle}</h1>
              <h3>{post.postDesc}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentPosts;
