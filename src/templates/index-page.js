/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine } from "react-icons/ri"
import {
  RiFacebookBoxFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiInstagramFill,
  RiRssFill,
  RiGithubFill,
  RiTelegramFill,
  RiPinterestFill,
  RiSnapchatFill,
  RiSkypeFill,
  RiDribbbleFill,
  RiMediumFill,
  RiBehanceFill,
} from "react-icons/ri"
import { FaTiktok, FaWordpress, FaVk } from "react-icons/fa"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import Seo from "../components/seo"
import Icons from "../util/socialmedia.json"
import WhoWeAreSection from "../components/WhoWeAreSection"

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  useEffect(() => {
    const script = document.createElement("script")
    script.defer = true
    script.id = "namespace-widget"
    script.widgetId = "0x548c333a38cd063a93d94bf710466c0d7d9b9f31eec844c29296f948541e69b0"
    script.type = "module"
    script.src = "https://namespace.fra1.digitaloceanspaces.com/widget/latest/bundle.js"
    document.head.appendChild(script)
  }, [])

  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div key={"social icons" + index}>
        {icons.icon === "facebook" ? (
          <a href={icons.url} target="_blank" aria-label="link to Facebook" rel="noopener noreferrer">
            <RiFacebookBoxFill alt="Facebook icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "twitter" ? (
          <a href={icons.url} target="_blank" aria-label="link to Twitter" rel="noopener noreferrer">
            <RiTwitterFill alt="Twitter icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "linkedin" ? (
          <a href={icons.url} target="_blank" aria-label="link to Linkedin" rel="noopener noreferrer">
            <RiLinkedinBoxFill alt="Linkedin icon"/>
          </a>
        ) : (
          ""
        )}
        {icons.icon === "youtube" ? (
          <a href={icons.url} target="_blank" aria-label="link to Youtube" rel="noopener noreferrer">
            <RiYoutubeFill alt="Youtube icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "instagram" ? (
          <a href={icons.url} target="_blank" aria-label="link to Instagram" rel="noopener noreferrer">
            <RiInstagramFill alt="Instagram icon" />
          </a>
        ) : (
          ""
        )}
        {/*
        {icons.icon === "rss" ? (
          <a href={icons.url} target="_blank" aria-label="link to RSS" rel="noopener noreferrer">
            <RiRssFill alt="RSS icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <a href={icons.url} target="_blank" aria-label="link to Github" rel="noopener noreferrer">
            <RiGithubFill alt="Github icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <a href={icons.url} target="_blank" aria-label="link to Telegram" rel="noopener noreferrer">
            <RiTelegramFill alt="Telegram icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "pinterest" ? (
          <a href={icons.url} target="_blank" aria-label="link to Pinterest" rel="noopener noreferrer">
            <RiPinterestFill alt="Pinterest icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "snapchat" ? (
          <a href={icons.url} target="_blank" aria-label="link to Snapchat" rel="noopener noreferrer">
            <RiSnapchatFill alt="Snapchat icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "skype" ? (
          <a href={icons.url} target="_blank" aria-label="link to Skype" rel="noopener noreferrer">
            <RiSkypeFill alt="Skype icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "wordpress" ? (
          <a href={icons.url} target="_blank" aria-label="link to Wordpress" rel="noopener noreferrer">
            <FaWordpress alt="Wordpress icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "tiktok" ? (
          <a href={icons.url} target="_blank" aria-label="link to Wordpress" rel="noopener noreferrer">
            <FaTiktok alt="tiktok icon" />
          </a>
        ) : (
          ""
        )}
        
        {icons.icon === "dribbble" ? (
          <a href={icons.url} target="_blank" aria-label="link to Dribbble" rel="noopener noreferrer">
            <RiDribbbleFill alt="Dribbble icon" />
          </a>
        ) : (
          ""
        )}
        {icons.icon === "medium" ? (
          <a href={icons.url} target="_blank" aria-label="link to Medium" rel="noopener noreferrer">
            <RiMediumFill alt="Medium icon" />
          </a>
        ) : (
          ""
        )}

        {icons.icon === "behance" ? (
          <a href={icons.url} target="_blank" aria-label="link to Behance" rel="noopener noreferrer">
            <RiBehanceFill alt="Behance icon" />
          </a>
        ) : (
          ""
        )}
       

        {icons.icon === "vk" ? (
          <a href={icons.url} target="_blank" aria-label="link to vk" rel="noopener noreferrer">
            <FaVk alt="vk icon" />
          </a>
        ) : (
          ""
        )}
         */}
      </div>
    )
  })


  
  return (
    <Layout>
      <Seo />
        

        

      <div sx={{
        maxWidth: "1140px",
        margin: "0 auto",
        padding: "0 20px",
      }}>
      {/* Insert the new WhoWeAreSection component here */}
      <WhoWeAreSection />
        {/*  {Image ? (
              <GatsbyImage
                image={Image}
                alt={frontmatter.title + " - Featured image"}
                className="featured-image"
              />
            ) : (
              ""
            )}
            */} 
        <h1 
          className="title" 
          sx={{
            fontSize: "5rem",
            fontWeight: "700",
            color: "#2D0E4C",
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: ".1rem",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {frontmatter.title}
        </h1>
        <div className="home-banner grids col-1 sm-2">          
          <div>
            <div 
              sx={{ marginTop: ".1rem", fontSize: "0.9rem" }}
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Link
              to={frontmatter.cta.ctaLink}
              className="button"
              sx={{
                variant: "variants.button",
              }}
            >
              {frontmatter.cta.ctaText}
              <span className="icon -right">
                <RiArrowRightSLine />
              </span>
            </Link>
           
            <div sx={{ marginTop: "2rem", fontSize: "0.9rem" }}>
            <p
              className="tagline"
              sx={{
                color: "muted",
              }}
            >
              {frontmatter.tagline}
            </p>
              <p>We're NYC (MBE) Minority Business Certified and 100 percent minority owned and led. Our differences make us smarter. Our passion for great experiences keeps us learning and growing.</p>
            </div>
          </div>
          
          <div
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              lineHeight: "1.4",
              color: "#2D0E4C",
              '& strong': {
                fontWeight: "700"
              }
            }}
          >
            
            <p>
            Pioneering <strong>digital evolution</strong>, we breathe life into brands. Our unique fusion of <strong>narrative</strong>, <strong>technology</strong>, and <strong>design</strong> sets us apart. We blend <strong>meticulous research</strong> with <strong>innovative thinking</strong>, delivering unrivaled digital experiences.
           
          
        
            </p>
            
          </div>
        </div>
      </div>
      <div
        sx={{
          backgroundColor: "#2D0E4C",
          color: "white",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <div
          sx={{
            maxWidth: "1140px",
            margin: "0 auto",
          }}
        >
          <h2
            sx={{
              fontSize: "1.2rem",
              fontWeight: "normal",
              marginBottom: "2rem",
            }}
          >
            Tell us about your project
          </h2>
          <p
            sx={{
              fontSize: ["2.5rem", "3rem", "3.5rem"],
              lineHeight: 1.2,
              fontFamily: "'Playfair Display', serif",
              marginBottom: "2rem",
            }}
          >
             Share your vision, and let's create something extraordinary. Together, we'll elevate your brand, captivate your audience, and drive your success forward.
    
          </p>
          <Link
            to="/contact"
            sx={{
              display: "inline-block",
              backgroundColor: "#8A4FFF",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "2rem",
              textDecoration: "none",
              fontWeight: "bold",
              marginBottom: "3rem",
            }}
          >
            Partner With Us
          </Link>
          <div
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <p
              sx={{
                color: "#FFA15C",
                fontWeight: "bold",
                marginLeft: "3rem",
                marginBottom: "1rem",
              }}
            >
              WORKING WORLDWIDE
            </p>
            <p sx={{ 
              marginRight: "3rem", 
              marginBottom: "1rem" }}>
              Based in New York City
            </p>
           {/*} <Link
              to="/contact"
              sx={{
                color: "white",
                textDecoration: "underline",
              }}
            >
              Discuss a project
            </Link>
            */}
          </div>
          <h2
            sx={{
              fontSize: ["4rem", "5rem", "6rem"],
              fontFamily: "'Playfair Display', serif",
              marginTop: "2rem",
            }}
          >
            Let's Talk
          </h2>
        </div>
      </div>
      <div sx={{ marginTop: "2rem", fontSize: "0.9rem" }}>
      <BlogListHome data={posts} />
      </div>
      
    </Layout>
  )
}

export default HomePage