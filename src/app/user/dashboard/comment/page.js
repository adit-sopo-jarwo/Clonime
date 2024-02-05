import Header from "@/components/Dashboard/Header";
import { authSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import NoComment from "../../../../components/AnimeList/NoComment";

const page = async () => {
  const user = await authSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });

  return (
    <section className="mt-4 px-4 w-full">
      <Header title="My Comments" />
      <div className="grid grid-cols-4 px-4 py-4 gap-4">
        {comments.length === 0 ? (
          <NoComment />
        ) : (
          comments.map((comment) => (
            <Link
              href={`/anime/${comment.anime_mal_id}`}
              key={comment.id}
              className="bg-color-dark p-4 shadow-md"
            >
              <p className="flex justify-center items-center text-color-primary mb-2">{comment.anime_title}</p>
              <p className="flex justify-center items-center italic mt-2">{comment.comment}</p>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default page;
