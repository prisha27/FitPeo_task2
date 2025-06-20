import { useEffect, useRef, useState } from "react";
const supporters = [
  "Celina Hilbert",
  "Alena Smith Interior Design",
  "Andrew Sloan",
  "Andrew Vaughan",
  "Andy Marks",
  "Arielle Breit",
  "Art Disrupt",
  "Austin Smidt",
  "AUTHENTIC DESIGN ALLIANCE (ADA)",
  "Ben Rennie",
  "BETTER FUTURE",
  "Bohdan Dorniak & Co Pty Ltd - PROSPECT, SA",
  "Brand & Communications at Edge Impact",
  "Breathe Architecture",
  "BWD Strategic",
  "Cameron Tonkinwise",
  "Carbon Creative",
  "Carolyn King",
  "Celine Waters",
  "Charlotte Adams",
  "Chris Speed",
  "Design by Nature",
  "Design Consigned",
  "Diadem",
  "Dr Michelle Douglas FRSA",
  "eco creative agency",
  "Ethos Digital Agency",
  "Finbar",
  "Founded by Design Pty Ltd",
  "Frost*",
  "Gabriella Wilson",
  "Genius Agency",
  "Geoff Isaac",
  "Glen Barry",
  "Gloria Quiroga",
  "Good 4 Business",
  "Good Design Australia",
  "Goodness",
  "Goodsports",
  "Hammond Studio",
  "Harry Steer",
  "Heidi Romano",
  "Holonic",
  "Hortenzia",
  "James Hodgson Design",
  "Jas Soh",
  "Jeremy Yuille",
  "Jo Li Tay",
  "John Young",
  "Josh Riesel",
  "Karina Clarke",
  "Katapult Design",
  "Kirby C",
  "Koskela",
  "Leigh Phillips-Brown",
  "Leigh-Anne Hepburn",
  "Leyla Acaroglu",
  "Liane Rossler",
  "LPB Designs and Interiors",
  "Madeline Johnston",
  "Make Tomorrow™",
  "Marnie Hawson",
  "Martin Tomitsch",
  "MEK Studio",
  "Mirella Arapian",
  "Moffitt.Moffitt.",
  "Motherbird",
  "Nacara Studio",
  "Nila Rezaei",
  "Particle Design Studio",
  "Philip Ely PhD",
  "philo & co",
  "Planitree",
  "Reny Studio",
  "Reny®",
  "Ricardo Sosa",
  "RK Collective",
  "RMIT University",
  "Samuel Yu",
  "Seek & Design",
  "Snug House",
  "Society for Responsible Design Inc.",
  "Sponge",
  "Stephanie Mulder",
  "Steve Baty",
  "STUDIO PERISCOPE",
  "Studio Regina",
  "studiospillane",
  "Tanisha Maria Naik",
  "The Design Thinkers",
  "UNEND",
  "United Studio",
  "vert design",
  "Wendy Fountain",
  "X+O",
  "Ys",
  "Zero Co pty Ltd",
  "Luain",
  "Rifat Anik",
  "Air",
  "Blue Kameleon SRL",
  "Core Branding",
  "Futurewave",
  "HIER",
  "Orb",
  "Adriana Tamashiro",
  "Agatha Martins",
  "Alexander Ângelo Guazzelli",
  "Alexandre de Oliveira Lot",
  "Amanda Lima Neves Scorsolini",
  "Ana Luísa Canto",
  "Ana Paula Batista",
  "Audrey Italo Melo",
  "BRQ Digital Solutions",
  "Bruna Cerasi",
  "Bruna Luiza Schwendler",
  "Bruna Mattos",
  "Brunna Moura",
  "BRUNO FREIRE PERRONE",
  "Cacto Publicidade",
  "Camila Calegari Marques",
  "Camila de Almeida Santos",
  "Camila Lozeckyi",
  "Carlos Filipe Alves Lima",
  "Carlos Ignacio Hernández Tellez",
  "Carol Hoffmann",
  "CECILIA PACHECO",
  "Chelles & Hayashi Design",
  "christian ullmann",
  "Claudia Mardegan",
  "Claudio Pelizari",
  "Danton Gravina",
  "Denilson Silva",
  "Denise Oliveira Martins",
  "Design Docol at Docol Sanitaryware",
  "Design Team at WIS Learn",
  "DI",
  "Diego Nunes",
  "Diogo Lucato",
  "DPO Saudável",
  "Echos",
  "Eduardo Maia",
  "Eliane Quadro",
  "Empathy Company",
  "Estúdio Atômico",
  "Estúdio Guto Requena",
  "Estudio Marte",
  "Fares Saba Jr",
  "Fernanda",
  "Fernanda Fidelis",
  "Fernanda Romera",
  "Fluyd",
  "Francisco Albuquerque",
  "GABRIEL ESTEVES DE OLIVEIRA LEITAO",
  "George Rutherford",
  "GIOVANA LORENA FAZIONI",
  "Green Mandarin",
  "Greg Lopes",
  "IMK Arquitetura e Engenharia",
  "Jaakko Tammela",
  "Jenifer Rodrigues",
  "Juan Solís Gundín",
  "JULIA RESENDE",
  "Júlia Timponi",
  "JULIANA SIDSAMER",
  "Julianny aidel rafea",
  "Junior Magalhães",
  "KAREN TIE KAWAKAMI",
  "Karla Scherer",
  "Larissa Nunes",
  "Leo Eyer",
  "Leonardo Lins",
  "Lincoln Seragini",
  "Lincoln Shiguio",
  "Luciana Shirakawa",
  "LUIS FERNANDO OSCAR COSTA",
  "Maialu Ferlauto",
  "Marcelo F. Pereira Junior",
  "Marcelo Sales",
  "Marcon Zanin",
  "Marcos Vinícius Machado de Oliveira",
  "Maria de Fátima Gullino Frazão",
  "Maria Elisa Zaia",
  "Mariana Fonseca de Souza",
  "Mariana Pereira Weber",
  "Mateus Bull Furlan",
  "Mayra Sasso",
  "Nathalia Petta",
  "paaassos design studio",
  "Pamela Basilio",
  "Patricia Watson",
  "Paula Cristiani Takahashi",
  "Paulo Peres",
  "Paulo Santos",
  "Pedro Gomes",
  "Pedro Martins e Souza",
  "Pedro Naif",
  "Pedro Pazitto",
  "PPTzeiros",
  "Raissa Esther",
  "Raquel Lima",
  "RedBandana Branding and Design",
  "Rei Campos Inovação em Serviços",
  "Renan Benvenuti",
  "Renan Migliorini",
  "Renata matos",
  "Renato Winnig",
  "Robson Zumkeller",
  "RODRIGO ANTONIO QUEIROZ COSTA",
  "Rodrigo Peixoto",
  "Sandra Ribeiro Cameira",
  "Simbïo Design",
  "Studio Allure",
  "tellus",
  "Thayane",
  "Thiago Barreto",
  "Thiago Vieira Marques",
  "Thoz",
  "tiago taveira",
  "Tudo é Acessibilidade",
  "UERJ",
  "Vagner Trevisan",
  "Vanessa Silva",
  "Victor Maluhy",
  "Victor Mascarenhas",
  "VIRGINIA CORNELSEN",
  "Visorama",
  "Wagner Lúcio",
  "weme",
  
];



export default function GlobalSupportersList() {
  const [count, setCount] = useState(200);
  const target = 663;
  const countRef = useRef();
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = null;
          const duration = 1200;

          const animateCount = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const easedProgress = Math.min(progress / duration, 1);
            const current = Math.floor(200 + easedProgress * (target - 200));
            setCount(current);
            if (progress < duration) {
              requestAnimationFrame(animateCount);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      {
        threshold: 0.4, 
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen px-4 py-12" ref={countRef}>
      <div className="text-left mb-10">
        <h1 className="text-5xl font-bold mb-2">#{count}</h1>
        <h2 className="text-2xl">
          Global Supporters in{" "}
          <span className="bg-orange-600 text-white text-base rounded-full px-3 py-1 inline-block">
            D!UK
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-2 text-xs tracking-tight leading-tight">
        {supporters.map((name, idx) => (
          <a
            key={idx}
            href="https://www.pentagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline transition-all px-1 py-0.5"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}

