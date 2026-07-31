import { galleryPhotos } from '../data/gallery'
import PlaceholderImage from '../components/common/PlaceholderImage'
import { useLanguage } from '../context/LanguageContext'

export default function Gallery() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-[1800px] px-4 py-16 sm:px-8 lg:px-12 2xl:px-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson-600">
          {t('Gallery', '갤러리')}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
          {t('A Taste of Nepres', 'Nepres의 순간들')}
        </h1>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 2xl:grid-cols-5">
        {galleryPhotos.map((photo) =>
          photo.image ? (
            <img
              key={photo.id}
              src={photo.image}
              alt={photo.alt}
              loading="lazy"
              className="aspect-square w-full rounded-lg object-cover"
            />
          ) : (
            <PlaceholderImage key={photo.id} label={photo.alt} className="aspect-square w-full rounded-lg" />
          ),
        )}
      </div>
    </section>
  )
}
