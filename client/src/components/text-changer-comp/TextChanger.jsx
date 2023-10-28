import { useState, useEffect } from 'react';

export default function TextChanger() {
  const texts = ['"Cumhuriyeti Biz Kurduk Siz Yükselteceksiniz"', '"Ey Türk Gençliği"', '"İstikbal Göklerdedir!"'];
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0); // Metni gizle
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setOpacity(100); // Metni göster
      }, 1000); // 500 milisaniyede metni değiştir ve göster
    }, 3000); // 5 saniyede bir metni değiştir

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className='flex gap-2'>
      <p className="text-white font-sans" style={{ opacity: opacity, transition: 'opacity 1s ease-in' }}>
        {texts[index]}
      </p>
      <span className='text-white font-extrabold italic'> -M.K.A.</span>
    </div>
  );
}
