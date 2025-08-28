export default function About (){
    return (
    <>
    <div className="max-w-4xl mx-auto p-6 min-h-screen"  style={{ "fontFamily": "'Lora', serif" }}>
      <h1 className="text-[1.48rem] font-bold mb-4">About Inter IIT Sports Meet</h1>
      <p className="text-lg text-shadow-gray-700">
        The Inter IIT Sports Meet is the premier sporting event for all Indian Institutes of Technology, 
        where athletes showcase their skills and celebrate the spirit of competition and unity.
      </p>
    </div>
    </>
  );
 
}

export const metadata = {
  title: "About | Inter IIT Sports Meet",
  description:
    "Learn more about the Inter IIT Sports Meet, its history, hosting IITs, and the spirit of sportsmanship that unites all IITs every year.",
};