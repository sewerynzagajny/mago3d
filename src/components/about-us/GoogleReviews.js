import { useCallback, useState, useEffect } from "react";
import Btn from "../Btn";
import ScrollEffectContainer from "../ScrollEffectContainer";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(true);

  // Twoje Google Places API key (ustaw w zmiennych środowiskowych)
  // const API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.REACT_APP_GOOGLE_PLACE_ID; // ID twojej firmy

  const fetchGoogleReviews = useCallback(async () => {
    try {
      // Pobieranie opinii z własnego backendu PHP
      const response = await fetch("/google-reviews.php");
      const data = await response.json();

      setRating(data.rating || 0);
      setTotalReviews(data.user_ratings_total || 0);
      setReviews(data.reviews || []);
    } catch (error) {
      console.error("Błąd podczas pobierania opinii:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGoogleReviews();
  }, [fetchGoogleReviews]);

  // // MOCK zamiast fetchGoogleReviews
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setRating(4.8);
  //     setTotalReviews(123);
  //     setReviews([
  //       {
  //         author_name: "Jan Kowalski",
  //         profile_photo_url: "https://randomuser.me/api/portraits/men/1.jpg",
  //         rating: 5,
  //         time: 1710000000,
  //         text: "Super firma, polecam!",
  //       },
  //       {
  //         author_name: "Anna Nowak",
  //         profile_photo_url: "https://randomuser.me/api/portraits/women/2.jpg",
  //         rating: 4,
  //         time: 1711000000,
  //         text: "Bardzo szybka realizacja zamówienia.",
  //       },
  //       {
  //         author_name: "Piotr Zieliński",
  //         profile_photo_url: "https://randomuser.me/api/portraits/men/3.jpg",
  //         rating: 5,
  //         time: 1712000000,
  //         text: "Profesjonalna obsługa i świetna jakość wydruków.",
  //       },
  //     ]);
  //     setLoading(false);
  //   }, 500);
  // }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star_full">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star_half">
          ★
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star_empty">
          ☆
        </span>
      );
    }

    return stars;
  };

  function handleAddReview() {
    // Przekierowanie do Google Reviews
    const googleReviewUrl = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;
    window.open(googleReviewUrl, "_blank");
  }

  return (
    <div id="opinie" className="google-reviews-background">
      <div className="google-reviews">
        <ScrollEffectContainer
          totalImages={0}
          threshold={0}
          animationTime={0.6}
          animationTransform="translateY(2rem)"
          // rootMargin="50%"
        >
          <h2 className="heading-secondary">Opinie</h2>
          <h3 className="heading-tertiary">
            Google opinie i oceny naszyych klientów
          </h3>
        </ScrollEffectContainer>
        {loading ? (
          <ScrollEffectContainer
            totalImages={0}
            threshold={0}
            animationTime={0.6}
            animationTransform="translateY(2rem)"
          >
            <div className="google-reviews__loading">Ładowanie opinii...</div>
          </ScrollEffectContainer>
        ) : (
          <ScrollEffectContainer
            totalImages={5}
            threshold={0}
            animationTime={0.6}
            animationTransform="translateY(2rem)"
            rootMargin="50%"
          >
            <div className="google-reviews__header">
              <div className="google-reviews__rating-summary">
                <div className="google-reviews__stars">
                  {renderStars(rating)}
                </div>
                <span className="google-reviews__rating-text">
                  {rating.toFixed(1)} ({totalReviews} opinii)
                </span>
              </div>
            </div>

            <div className="google-reviews__list">
              {reviews.slice(0, 5).map((review, index) => (
                <div key={index} className="google-reviews__item">
                  <div className="google-reviews__item-header">
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="google-reviews__avatar"
                    />
                    <div className="google-reviews__info">
                      <h4 className="google-reviews__author">
                        {review.author_name}
                      </h4>
                      <div className="google-reviews__item-rating">
                        {renderStars(review.rating)}
                      </div>
                      <span className="google-reviews__date">
                        {new Date(review.time * 1000).toLocaleDateString(
                          "pl-PL"
                        )}
                      </span>
                    </div>
                  </div>
                  <p className="google-reviews__text">{review.text}</p>
                </div>
              ))}
            </div>

            <div className="google-reviews__actions">
              <Btn onClick={handleAddReview} className="btn">
                Dodaj opinię w Google
              </Btn>
              <Btn
                href={`https://www.google.com/search?sca_esv=3481189b07e67a2a&hl=pl-PL&gl=pl&sxsrf=AE3TifMLQ5d8yUigFy3KJcqGphq0GSCYCA:1756456142284&q=MaGo3d.pl+I+druk+3d+Szczecin+I+druk3d+I+usługi+druku+3d,+Grzymińska+3/15,+71-711+Szczecin&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E_5YTrl39kBtH49iCmiDB8OMFyu0LGS6BVjvoryu24ILj1dUL2af2uMp0Xfl9NBQY6aZtS0%3D&uds=AOm0WdEAA64grrlFWuOz8hk002w9j451Hi6O7yz0_vR0GVQEh5yqC4JikfYPdgQKcYw3-y5K6HbQUX9gb82QYgOIVOk0tFDJC00SGe-Jkut2vYocUYD0YWpy9ftNv3TBa3IkfQzyrUGZVZRT2NvT3KkWNaCEiW-67bzH4CNj9nz1m0y8ShJQA6731S50VJCRlaorzdC_c5hG&sa=X&ved=2ahUKEwjzrbKDza-PAxXPEBAIHWR0Ew8Q3PALegQIHxAE&cshid=1756456245881146&biw=1482&bih=730&dpr=1.25`}
                className="btn"
              >
                Zobacz wszystkie opinie
              </Btn>
            </div>
          </ScrollEffectContainer>
        )}
      </div>
    </div>
  );
}
