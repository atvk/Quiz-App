import type { Test } from "../damains/tests/types";

type TestSelectedProps = {
  test: Test;
}

export default function TestSelected({ test }: TestSelectedProps) {

  return (
    <div className="grid border border-indigo-600 rounded-xl gap-4 p-5 m-5 ">

      <h1>{test.name}</h1>
      <p>{test.id}</p>
      <p>Прогресс Бар</p>

      <div>Блок вопросов и кнопка ответить</div>


    </div>
  )
}

