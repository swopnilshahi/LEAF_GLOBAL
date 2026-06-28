import { useEffect } from 'react';

export default function useIntersectionObserver(selector = '.fade-up') {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.add('visible');
          entry.target.classList.remove('opacity-0', 'translate-y-[30px]');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(selector).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
}