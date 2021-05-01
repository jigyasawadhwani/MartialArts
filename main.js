let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");

//characterA
    let loadImage = (src, callback) => {
        let img = document.createElement("img");
        img.onload = () => callback(img);
        img.src = src;
    }

    let imagePath = (frameNumber, animation) => {
        return "images1/" + animation + "/" + frameNumber + ".png";
    };

    let frames = {
        idle: [1, 2, 3, 4, 5, 6, 7, 8],
        kick: [1, 2, 3, 4, 5, 6, 7],
        punch: [1, 2, 3, 4, 5, 6, 7],
        forward: [1, 2, 3, 4, 5, 6],
        backward: [1, 2, 3, 4, 5, 6],
        block: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

    let loadImages = (callback) => {
        let images = { idle: [], kick: [], punch: [], forward: [], backward: [], block: []};
        let imagesToLoad = 0;
        
        ["idle", "kick", "punch", "forward", "backward", "block"].forEach((animation) => {
            let animationFrames = frames[animation];
            imagesToLoad = imagesToLoad + animationFrames.length;
            
            animationFrames.forEach((frameNumber) => {
                let path = imagePath(frameNumber, animation);
                
                loadImage(path, (image) => {
                images[animation][frameNumber - 1] = image;
                imagesToLoad = imagesToLoad - 1;
                
                if(imagesToLoad === 0){
                    callback(images);
                }
                }); 
            });
        });
    };

    
    let mv = 0;

    let animate = (ctx, images, animation, callback) => {

        if(animation === "forward")
        mv += 30;
        else if(animation === "backward")
        mv -= 30;

        images[animation].forEach((image,index) => {
            setTimeout(() => {
                ctx.clearRect(mv, 0, 650, 650);
                ctx.drawImage(image, mv, 0, 650, 650);
            }, index * 100);
        });
        
        setTimeout(callback, images[animation].length * 100);
    }

    loadImages((images) => {
        let queuedAnimations = [];
        
        let aux = () => {
            let selectedAnimation;
            
            if(queuedAnimations.length === 0)
            selectedAnimation = "idle";
            
            else
            selectedAnimation = queuedAnimations.shift();
            animate(ctx, images, selectedAnimation, aux);
        }
        
        aux();
        
        document.getElementById("kickA").onclick = () => {
            queuedAnimations.push("kick");
        };
        document.getElementById("punchA").onclick = () => {
            queuedAnimations.push("punch");
        };
        document.getElementById("forwardA").onclick = () => {
            queuedAnimations.push("forward");
        };
        document.getElementById("backwardA").onclick = () => {
            queuedAnimations.push("backward");
        };
        document.getElementById("blockA").onclick = () => {
            queuedAnimations.push("block");
        };
        
        document.addEventListener("keypress", (event) => {
            const key = event.key;
            if(key === "x"){
                queuedAnimations.push("punch");
            }
            else if(key === "w"){
                queuedAnimations.push("kick");
            }
            else if(key === "d"){
                queuedAnimations.push("forward");
            }
            else if(key === "a"){
                queuedAnimations.push("backward");
            }
            else if(key === "s"){
                queuedAnimations.push("block");
            } 
        });
     });

//characterB
    let loadImageB = (src, callback) => {
        let imgB = document.createElement("img");
        imgB.onload = () => callback(imgB);
        imgB.src = src;
    }

    let imagePathB = (frameNumberB, animationB) => {
        return "images2/" + animationB + "/" + frameNumberB + ".png";
    };

    let framesB = {
        idle: [1, 2, 3, 4, 5, 6, 7, 8],
        kick: [1, 2, 3, 4, 5, 6, 7],
        punch: [1, 2, 3, 4, 5, 6, 7],
        forward: [1, 2, 3, 4, 5, 6],
        backward: [1, 2, 3, 4, 5, 6],
        block: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };

    let loadImagesB = (callback) => {
        let imagesB = { idle: [], kick: [], punch: [], forward: [], backward: [], block: []};
        let imagesToLoadB = 0;
        
        ["idle", "kick", "punch", "forward", "backward", "block"].forEach((animationB) => {
            let animationFramesB = framesB[animationB];
            imagesToLoadB = imagesToLoadB + animationFramesB.length;
            
            animationFramesB.forEach((frameNumberB) => {
                let pathB = imagePathB(frameNumberB, animationB);
                
                loadImageB(pathB, (imageB) => {
                imagesB[animationB][frameNumberB - 1] = imageB;
                imagesToLoadB = imagesToLoadB - 1;
                
                if(imagesToLoadB === 0)
                callback(imagesB);
                }); 
            });
        });
    };

    let mvB = 650; 

    let animateB = (ctx, imagesB, animationB, callback) => {

        if(animationB === "forward")
        mvB -= 40;
        else if(animationB === "backward")
        mvB += 40;

        imagesB[animationB].forEach((imageB,index) => {
            setTimeout(() => {
                ctx.clearRect(mvB, 0, 650, 650);
                ctx.drawImage(imageB, mvB, 0, 650, 650);
            }, index * 100);
        });
        
        setTimeout(callback, imagesB[animationB].length * 100);
    }

    loadImagesB((imagesB) => {
        let queuedAnimations = [];
        
        let aux = () => {
            let selectedAnimation;
            
            if(queuedAnimations.length === 0)
            selectedAnimation = "idle";
            else
            selectedAnimation = queuedAnimations.shift();
            animateB(ctx, imagesB, selectedAnimation, aux);
        }
        
        aux();
        
        document.getElementById("kickB").onclick = () => {
            queuedAnimations.push("kick");
        };
        document.getElementById("punchB").onclick = () => {
            queuedAnimations.push("punch");
        };
        document.getElementById("forwardB").onclick = () => {
            queuedAnimations.push("forward");
        };
        document.getElementById("backwardB").onclick = () => {
            queuedAnimations.push("backward");
        };
        document.getElementById("blockB").onclick = () => {
            queuedAnimations.push("block");
        };
        
        document.addEventListener("keyup", (event) => {
            const key = event.key;
            if(key === "ArrowLeft"){
                queuedAnimations.push("backward");
            }
            else if(key === "ArrowUp"){
                queuedAnimations.push("kick");
            }
            else if(key === "ArrowRight"){
                queuedAnimations.push("forward");
            }
            else if(key === "ArrowDown"){
                queuedAnimations.push("punch");
            }
            else if(key === "Enter"){
                queuedAnimations.push("block");
            }
        });
     });