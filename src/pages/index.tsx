import Todo from "@components/Todo/Todo";
import type { GetServerSideProps } from "next";
import { getTodos } from "../services/Todo.requests";
import { ITodo } from "../interfaces/ITodo";

const Home = ({ todos, error }: { todos: ITodo[]; error: boolean }) => {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex-item-center justify-center">
      <section className="bg-white w-10/12 lg:w-8/12 2xl:w-6/12 rounded-xl shadow-2xl shadow-red-100">
        <h1 className=" text-lg font-bold p-5 ">
          Todo{" "}
          <span className="text-gray-400 font-normal">({todos.length})</span>
        </h1>
        <aside className="flex flex-col">
          {error
            ? "Error API"
            : todos.map((todo, key) => {
                return <Todo key={key} todo={todo} />;
              })}
        </aside>
      </section>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const todos = await getTodos();
    return {
      props: {
        todos: todos.data,
        error: false,
      },
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
};

export default Home;
