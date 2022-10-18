import "../../../Styles/Components/Options/AudioQuran/AudioQuranNavbar.scss";
const AudioQuranNavbar = () => {
  return (
    <div className="QuranNavbar-container">
      <button type="button" className="QuranNavbar-item">
        <a>سوره</a>
      </button>
      <button type="button" className="QuranNavbar-item">
        <a>صفحه</a>
      </button>
      <button type="button" className="QuranNavbar-item">
        <a>جزء</a>
      </button>
      <button type="button" className="QuranNavbar-item">
        <a>علاقه مندی ها</a>
      </button>
    </div>
  );
};
export default AudioQuranNavbar;
