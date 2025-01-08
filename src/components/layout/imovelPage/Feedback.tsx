import React from "react";

interface FeedbackProps {
    feedbacks: number[]; // Lista de feedbacks contendo as avaliações
}

const Feedback: React.FC<FeedbackProps> = ({ feedbacks }) => {
    const totalFeedbacks = feedbacks.length;
    const averageRating = totalFeedbacks
        ? feedbacks.reduce((sum, rating) => sum + rating, 0) / totalFeedbacks
        : 0;

    // Arredondar para o múltiplo de 0.5 mais próximo
    const roundedRating = Math.round(averageRating * 2) / 2;

    // Array para construir as estrelas (5 estrelas no total)
    const stars = Array.from({ length: 5 }, (_, i) => {
        const starIndex = i + 1;
        if (roundedRating >= starIndex) {
            return "full"; // Estrela cheia
        } else if (roundedRating >= starIndex - 0.5) {
            return "half"; // Meia estrela
        } else {
            return "empty"; // Estrela vazia
        }
    });

    return (
        <div className="flex items-center space-x-2">
            {/* Renderizar estrelas */}
            <div className="flex">
                {stars.map((star, index) => (
                    <div
                        key={index}
                        className="relative w-6 h-6"
                        style={{
                            WebkitTextStroke: "1px var(--green-light)", // Contorno para todas as estrelas
                        }}
                    >
                        {/* Estrela Cheia */}
                        {star === "full" && (
                            <i
                                className="material-icons"
                                style={{
                                    color: "var(--green-light)",
                                }}
                            >
                                star
                            </i>
                        )}
                        {/* Meia Estrela */}
                        {star === "half" && (
                            <>
                                <i
                                    className="material-icons absolute left-0 top-0 w-1/2 h-6 overflow-hidden"
                                    style={{
                                        color: "var(--green-light)",
                                        WebkitTextStroke: "1px var(--green-light)",
                                    }}
                                >
                                    star
                                </i>
                                <i
                                    className="material-icons absolute right-0 top-0 w-6 h-6 text-transparent"
                                    style={{
                                        WebkitTextStroke: "1px var(--green-light)",
                                    }}
                                >
                                    star
                                </i>
                            </>
                        )}
                        {/* Estrela Vazia */}
                        {star === "empty" && (
                            <i
                                className="material-icons text-transparent"
                                style={{
                                    WebkitTextStroke: "1px var(--green-light)",
                                }}
                            >
                                star
                            </i>
                        )}
                    </div>
                ))}
            </div>
            {/* Texto com quantidade de avaliações */}
            <p className="text-sm text-gray-600">
                {totalFeedbacks > 0 ? `${totalFeedbacks} avaliações` : "0 avaliações"}
            </p>
        </div>
    );
};

export default Feedback;
