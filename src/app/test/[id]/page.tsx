import Test from "@/components/Test"

async function getTestById(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/tests/${id}`, {
      method: "GET", cache: "no-store",
    })
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function TestPage({ params }: any) {
  const test = await getTestById(params.id)
  return (
    <>
      <Test test={test} />
    </>
  );
};


