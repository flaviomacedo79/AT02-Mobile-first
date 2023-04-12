import React from "react";
import estilo from "./css/Feed.module.css";
const Feed = () => {
  return (
    <>
      <main className={estilo.feedMain}>
        {/* <main> */}
        <section>
          <div className={estilo.grid}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
            eligendi? Nemo dolore voluptates mollitia placeat alias architecto
            illo quibusdam doloremque nostrum? Aspernatur deserunt repellat
            consequatur nemo odio molestias culpa commodi.
          </div>
        </section>
        <section className={estilo.amizades}>
          <div>Amizade</div>
          <div>Sugestão de Amizade</div>
        </section>
      </main>
    </>
  );
};

export default Feed;
