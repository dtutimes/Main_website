import React from "react";
import {Link} from "react-router-dom";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useWideCardMediaStyles } from "@mui-treasury/styles/cardMedia/wide";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
// import Star from "./assets/star";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    width: 400,
    margin: "auto",
    boxShadow: "none",
    borderRadius: 15
  },
  content: {
    // padding: 24
  },
  cta: {
    textTransform: "initial"
  },
  
}));

/*interface CardNews {
  hasImg?:boolean;
  srcImg: string;
  width?: number;
  hasTitle?: boolean;
  title: string;
  hasDescription?: boolean;
  description: string;
  hasStars?: boolean;
  hasLink?: boolean;
  borderRadius?: number;
}*/

/*defaultProps {
  width: 400,
  borderRadius: 30,
  hasTitle: false,
  hasStars: false,
  hasImg: false,
  hasLink: false,
}*/
export const NewsCardDemo = React.memo(function NewsCard(props) {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  const n = 6;
    // console.log(props.title);
    let str = props.title || "";
    str = str.replace(/\s+/g, '-').toLowerCase();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        style={{"padding-bottom":"98.25%"}}
        image={
          require("assets/img/quiz/"+props.img)
        }
      />
      <CardContent className={styles.content}>
        <div className = "quizCard_content">
          <h1 className="quizCard_content_heading">{props.title}</h1>
          <p>{props.description}</p>
        </div>
      {
        //   <TextInfoContent
        //   color={"primary"}
        //   classes={textCardContentStyles}
        //   //overline={"March 20, 2019"}
        //   heading={props.title}
        //   body={props.description}
          
        // ></TextInfoContent>
      }
        <Button color={"primary"} fullWidth className={styles.cta}>
          <Link to={"/quiz/"+str}>Let's Play<ChevronRightRounded /></Link>
        </Button>
      </CardContent>
    </Card>
  );
});

export default NewsCardDemo;
