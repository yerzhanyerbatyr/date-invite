import { useMemo, useState } from "react";

export default function App() {
  const [accepted, setAccepted] = useState(false);

  const hearts = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: 5 + Math.random() * 90,
        size: 20 + Math.random() * 30,
        duration: 4 + Math.random() * 3,
        delay: Math.random() * 1.5,
        drift: -80 + Math.random() * 160,
      })),
    []
  );

  return (
    <>
      <style>{`
        @keyframes floatHeart {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-120vh) translateX(var(--drift)); opacity: 0; }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white flex items-center justify-center relative overflow-hidden p-6">

        {accepted && (
          <div className="absolute inset-0 pointer-events-none z-20">
            {hearts.map((h) => (
              <div
                key={h.id}
                className="absolute"
                style={{
                  left: `${h.left}%`,
                  bottom: "-50px",
                  fontSize: `${h.size}px`,
                  animationName: "floatHeart",
                  animationDuration: `${h.duration}s`,
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDelay: `${h.delay}s`,
                  "--drift": `${h.drift}px`,
                }}
              >
                💕
              </div>
            ))}
          </div>
        )}

        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-200 p-8 md:p-12 text-center">

          <div className="text-5xl mb-6">💌</div>

          <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-4">
            Дорогая Жибек, Приглашаю вас на свидание
          </h1>

          <p className="text-gray-600 mb-8">
            Вечер с уютной атмосферой, вкусным ужином и красивым мной
          </p>

          <div className="grid gap-4 text-left mb-8">
            <div className="bg-rose-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Когда</p>
              <p className="font-semibold">7 апреля, завтра</p>
            </div>

            <div className="bg-rose-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Где</p>
              <p className="font-semibold">Туран 83/2</p>
            </div>

            <div className="bg-rose-50 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Важно</p>
              <p className="font-semibold">
                Будьте готовы к 9 вечера, заеду за вами
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-6 rounded-2xl mb-8">
            <h2 className="text-xl font-bold mb-3">Меню</h2>
            <p>🐟 Рыба • 🥗 Салат • 🍷 Вино белое</p>
          </div>

          <button
            onClick={() => setAccepted(true)}
            className="px-8 py-3 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-lg transition"
          >
            Принять приглашение ♥
          </button>

          {accepted && (
            <p className="mt-6 text-lg text-rose-600 font-bold">
              ❤️ Жду тебя ❤️
            </p>
          )}
        </div>
      </div>
    </>
  );
}
