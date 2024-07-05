import React, { Component } from 'react';
import './Images.css';
import Img from './Img';
import LargeImage from './LargeImg';



class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgLst: [
                {  imgSrc:'https://t3.ftcdn.net/jpg/07/07/58/42/240_F_707584211_ee4ySd5M8lih73B9GSheXS4MlvheIfGm.jpg',
                    title: 'Shayon Image One',
                    details: "Shayon Image One. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc:'data:image/jpeg;base64,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',
                    title: 'Shayon Imege Two',
                    details: "Shayon Imege Two. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {   imgSrc:'https://t3.ftcdn.net/jpg/06/77/98/16/240_F_677981636_TzHxHSIG8iDnAc4CYghhws6aHwTT152c.jpg',
                    title: 'Shayon Image Three',
                    details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
                },
                {
                    imgSrc:'https://t4.ftcdn.net/jpg/07/07/47/13/240_F_707471375_Yu9l7b9iYfZed5d2eAhsLpoKUs7KXSNJ.jpg',
                    title: 'Shayon Image Four',
                 
                    details: "Shayon Image Four. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."

                },
            
                {   imgSrc:'https://t3.ftcdn.net/jpg/05/53/50/02/240_F_553500269_Pwz40Fdhh0xe1ogIVuLyQISokxAzim0f.jpg',
                title: 'Shayon Image Three',
                details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
            },
        
            {   imgSrc:'https://t3.ftcdn.net/jpg/06/80/00/72/240_F_680007292_0rycs3ECTHJzDXZu9ZZFA11VeezdGUEc.jpg',
                title: 'Shayon Image Three',
                details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
            },
        
            {   imgSrc:'https://t4.ftcdn.net/jpg/07/06/31/49/240_F_706314968_00TWXqu0xeZ7D1Fqkl6qiWVUeo7Zq4Ri.jpg',
                title: 'Shayon Image Three',
                details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
            },
        
            {   imgSrc:'https://t4.ftcdn.net/jpg/06/41/76/37/240_F_641763756_z2MPck8TcNAQIVhDKwc1IXdHLNPLBlkn.jpg',
                title: 'Shayon Image Three',
                details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
            },
        
            {   imgSrc:'https://t4.ftcdn.net/jpg/06/98/58/09/240_F_698580983_Ljvf391qKffa6ODzpgUl9qgtsOz901y5.jpg',
                title: 'Shayon Image Three',
                details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
            },
        
            {   imgSrc:'https://t4.ftcdn.net/jpg/06/81/72/61/240_F_681726143_YPd4F2WfWI7Ez0JXOV4zmDadqlMz5rUx.jpg',
                title: 'Shayon Image Three',
                details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
            },
            {   imgSrc:'https://t4.ftcdn.net/jpg/06/84/78/95/240_F_684789509_bE3KZGacO3eyUtpEBo1TJCbU5zFC0xQj.jpg',
            title: 'Shayon Image Three',
            details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
        },
        {   imgSrc:'https://t3.ftcdn.net/jpg/05/77/39/10/240_F_577391074_pZ18hDGxli2cxPg4Zr17UTZ2K8asFZWB.jpg',
        title: 'Shayon Image Three',
        details: "Shayon Image Three. This is image details <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusantium ut neque inventore voluptates, vitae maiores magnam corporis necessitatibus beatae."
    },

            ],
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
            lrgImg: {
                imgSrc: '',
                title: '',
                details: ''
            }
        }
    }

    handleClick = (e) => {
        console.log("this is working fine");
        e.preventDefault();



        if (this.state.imgStyle.imgListConStyle.display === 'flex') {
            console.log("Large Image title: " + this.state.lrgImg.title);

            this.setState({
                imgStyle: {
                    lrgImgConStyle: {
                        display: 'block'
                    },
                    imgListConStyle: {
                        display: 'none'
                    }
                },
            });

            Object.values(this.state.imgLst).forEach(element => {
                console.log(element.imgSrc);
                let sourceString = '..' + e.target.src.toString().slice(21);
                console.log(sourceString);



                if (element.imgSrc === sourceString) {
                    console.log("Source is matched");
                    console.log("Elelment title: " + element.title);


                    this.setState({
                        lrgImg: {
                            imgSrc: e.target.src,
                            title: element.title,
                            details: element.details
                        }
                    });
                } else {
                    console.log("Source didn't match");
                }
            });

        } else {
            console.log("Something went wrong");

        }
    }

    closeLargeImage = (e)=>{
        e.preventDefault();
        console.log("close button is working fine");
        this.setState({
            imgStyle: {
                lrgImgConStyle: {
                    display: 'none'
                },
                imgListConStyle: {
                    display: 'flex'
                }
            },
        });
    }

    buttonStyle = {
        background: 'none',
        border: 'none'
    }



    render() {
        let imageItemList = this.state.imgLst.map(image => {
            return (
                <button onClick={this.handleClick} style={this.buttonStyle} key={image.imgSrc} ><Img src={image.imgSrc}></Img></button>
            );
        })



        return (
            <React.Fragment >
                <div className="lg-img-con" style={this.state.imgStyle.lrgImgConStyle}>
                    <LargeImage closeButton={this.closeLargeImage} title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}></LargeImage>
                    {/* <LargeImage title={this.state.lrgImg.title} details={this.state.lrgImg.details} src={this.state.lrgImg.imgSrc}  > <LargeImage/> */}
                </div>
                <div className="wrapper" style={this.state.imgStyle.imgListConStyle}>
                    {imageItemList}
                </div>
            </React.Fragment>
        );
    }
}


export default Images;