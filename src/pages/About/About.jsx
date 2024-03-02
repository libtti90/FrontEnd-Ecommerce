import './About.css'
import bioPhoto from "../../assets/images/aboutpicture.png"

export default function About() {
  return (
    <>
    <main class="main-container">
    <section class="about-container">
    <div className="bio-container">
      <img className="photo-id" src={bioPhoto} alt="bio-photo" loading="lazy" />
      <h3 className="title-photo">Liliana Bainotti</h3>
      <p className="bio-description">
        As the web developer behind Woodland Furniture, I've crafted this website to showcase our exquisite furniture
        collection, making it easy for you to explore, choose, and bring the timeless beauty of wood into your home.
      </p>
    </div>
    <div class="container-web-info">
    <h1 class="title-about"> About Woodland</h1>
    <p class="description-about"> Welcome to Woodland Furniture, your one-stop destination for exquisite
                    wooden furniture that brings
                    the beauty of nature into your home. We are passionate about crafting high-quality, sustainable, and
                    timeless pieces that transform your living spaces.</p><br></br>
                    <p class="description-about"> At Woodland Furniture, our mission is to provide you with the finest
                    handcrafted wooden furniture
                    that not only adds elegance to your surroundings but also reflects our commitment to preserving the
                    environment. We believe that the warmth and character of wood should be accessible to everyone.</p>
                <br></br>
                <p class="description-about">At Woodland Furniture, we strive to make your online furniture shopping
                    experience as delightful as a walk through the woods. With a curated collection of one-of-a-kind
                    pieces, we offer you the opportunity to bring the enchantment of the outdoors into your home.</p>

    </div>
    </section>
    </main>
    </>
  )
}
