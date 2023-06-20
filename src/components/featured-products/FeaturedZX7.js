import Image from "next/image";
import Link from "next/link";

export default function FeaturedZX7() {
  return (
    <>
      <div className={styles.zx7}>
        <Image
          className={`${styles.img} hidden-md`}
          src="/assets/home/mobile/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className={`${styles.img} hidden-sm-lg`}
          src="/assets/home/tablet/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className={`${styles.img} hidden-sm-md`}
          src="/assets/home/desktop/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className={styles.inner}>
          <h2 className={styles.heading}>ZX7 Speaker</h2>
          <Link href="/speakers/zx7">
            <input
              className="btn btn--border btn--zx7"
              type="button"
              value="See Product"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
