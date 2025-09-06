
const LocationMap = () => {
  return (
    <section className="w-full bg-gray-50 overflow-hidden h-[310px] md:h-[350px] lg:h-[400px]">
      <div className="max-full mx-auto px-4">
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.515143630548!2d78.40822488069534!3d17.50136465227803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91cc8bc31263%3A0xa0ff9799f7f44021!2sNew%20Jerusalem%20church!5e0!3m2!1sen!2sin!4v1757162569225!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;