import Posts from "./components/Posts";
import ProfilePic from "./components/ProfilePic";

export const revalidate  = 86400

export default function Home() {

  return (
    <div className=" mx-auto" >
      <ProfilePic />
      <p className="mt-12 mb-12 text-center whitespace-nowrap dark:text-white ">
        Hello and Welcome 👋 I'm <span className="font-bold">Steve</span>
      </p>
      <Posts /> 
    </div>
  )
}
