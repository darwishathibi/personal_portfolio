

const sentences =
  "a network security student from IIUM, Malaysia with a passion for photography and tech. I enjoy developing software (but never release it, lol) and tackling CTF challenges, constantly honing my skills and expanding my knowledge in the digital world. I thrive on solving complex problems and always eager to learn and grow.";

const highlightColor = "#5C8374";

const highlightWords = [
  "IIUM",
  "Malaysia",
  "photography",
  "tech",
  "developing software",
  "CTF",
  "knowledge",
  "eager to learn",
];

// Function to dynamically apply highlights
function highlightText(
  text: string,
  wordsToHighlight: string[],
  highlightColor: string
) {
  // Split the text into words while preserving punctuation
  const regex = new RegExp(`(${wordsToHighlight.join("|")})`, "gi");

  // Split the text by the highlighted words and map over them
  return text.split(regex).map((part, index) => {
    if (wordsToHighlight.includes(part)) {
      return (
        <b key={index} style={{ color: highlightColor }}>
          {part}
        </b>
      );
    }
    return part;
  });
}

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="absolute text-white/10 text-[450px] overflow-hidden -top-36 right-0 font-extrabold tracking-wider">
        <p>About</p>
      </div>
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl space-y-4 w-5/12 tracking-wider">
        {highlightText(sentences, highlightWords, highlightColor)}
      </div>
    </div>
  );
}
