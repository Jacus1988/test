const userTab = [
    {
        id: 1,
        name: "Geralt",
        img: "img/geralt.png",
        atack : 25,
    },
    {
        id: 2,
        name: "Ciri",
        img: "img/ciri.png",
        atack: 25,
    },
    {
        id:3,
        name:"Zoltan",
        img:"img/zoltan1.png",
        atack:14,
    },
    {
        id:4,
        name:"Triss",
        img:"img/tris.png",
        atack:16,
    },
    {
        name:"Yennefer",
        img:"img/yenefer.png",
        atack:18 ,
    },
    {
        name:"Vernan Roche",
        img:"img/roche1.png",
        atack: 14,
    },
    {
        name:"Krwawy Baron",
        img:"img/baron.png",
        atack:10 ,
    },
    {
        name:"Brehen",
        img:"img/lucznik.png",
        atack:16 ,
    },
    {
        name:"Vesemir",
        img:"img/vesemir.png",
        atack:18,
    },
    {
        name:"Emhyr",
        img:"img/emhyr1.png",
        atack: 10,
    },
    {
        name:"Djikstra",
        img:"img/dikstra.png",
        atack:12,
    },
    {
        name:"Jaskier",
        img:"img/jaskier.png",
        atack:10,
    },
    {
        name:"Regis",
        img:"img/regis.png",
        atack:20,
    },
    {
        name:"Priscila",
        img:"img/priscila.png",
        atack: 12,
    },
    {
        name:"Bart",
        img:"img/bart.png",
        atack:14,
    },
];

const compTab = [
    {
        id:1,
        name:"Dziki Gon",
        img:"img/dzikigon.png",
        atack: 25,
    },
    {
        id:2,
        name:"Detlaf",
        img:"img/detlaf.png",
        atack:22,
    },
    {
        id:3,
        name:"Wilkołak",
        img:"img/wilkolak.png",
        atack:12,
    },
    {
        id:4,
        name:"Gryf",
        img:"img/gryf.png",
        atack:14,
    },
    {
        name:"Wiwerna",
        img:"img/smok.png",
        atack:12,
    },
    {
        name:"Pająk",
        img:"img/pajak.png",
        atack: 10,
    },
    {
        name:"Ghul",
        img:"img/ghul.png",
        atack: 10,
    },
    {
        name:"Leszy",
        img:"img/leszy.png",
        atack: 16,
    },
    {
        name:"Baba Cmentarna",
        img:"img/babacmentarna.png",
        atack: 10,
    },
    {
        name:"Bies",
        img:"img/bies.png",
        atack: 16,
    },
    {
        name:"Detlaf V.2",
        img:"img/potworywin.png",
        atack:24,
    },
    {
        name:"Golem Wiatru",
        img:"img/gholem.png",
        atack:18,
    },
    {
        name:"Ekima",
        img:"img/ekima.png",
        atack:16,
    },
    {
        name:"Poludnica",
        img:"img/poludnica.png",
        atack:12,
    },
    {
        name:"Bruksa",
        img:"img/bruksa.png",
        atack: 14,
    },
    
    
];

const arenaTab = [
    "img/drzewowisielcow.webp", "img/swamp.webp", "img/castle.webp","img/novigrad.jpg", "img/skellige.jpg","img/skelige1.webp","img/noc.webp", "img/wisielecdzien.jpg",
];

const userName = document.querySelector('.name.user')
const userImg = document.querySelector('.imguser')
const userAtack = document.querySelector('.atackinner.user')

const compName = document.querySelector('.name.comp')
const compImg = document.querySelector('.imgcomp')
const compAtack = document.querySelector('.atackinner.comp')

const  userTable = document.querySelector('.usertable')
const compTable = document.querySelector('.comptable')

const btnArena = document.querySelector('.btnArena')
const imgArena = document.querySelector('.imgArena')
const btnFight = document.querySelector('.btnFightbtn')

let healthUser = document.querySelector('.zycieuser')
let healthComp = document.querySelector('.zyciecomp')

let zycieUser = 100
let zycieComp = 100


const exitBtnComp = document.querySelector('.continueComp')
const exitBtn = document.querySelector('.continue')
const resultUser = document.querySelector('.backgrounduser')
const resultInner = document.querySelector('.resultinner')
const resultComp = document.querySelector('.backgroundcomp')
const resultInnerComp = document.querySelector('.resultinnerComp')

const backgroundArena = document.querySelector(".backgroundarena")
const btnok = document.querySelector('.btnok')
const btnokC = document.querySelector('.btnokC')
const btnokU = document.querySelector('.btnokU')
const backgroundStwor = document.querySelector(".backgroundstwor")
const backgroundPostac = document.querySelector(".backgroundpostac")

const winnerUser = document.querySelector('.winneruser')
const btnOnMore = document.querySelector('.btnonemore')
const winnerComp = document.querySelector('.winnercomp')
const btnOnMoreC = document.querySelector('.btnonemoreC')



for(i=0; i<userTab.length ; i++)
{
    const choiceUser = document.createElement('img')
    choiceUser.setAttribute('data-id', i)
    choiceUser.setAttribute('src',userTab[i].img)
    choiceUser.setAttribute('name', userTab[i].name)
    choiceUser.setAttribute('id', userTab[i].atack)
    userTable.appendChild(choiceUser)
    choiceUser.classList.add('userchoice')
    choiceUser.addEventListener('click', () => {
        currentUser = choiceUser
        userName.textContent = choiceUser.name
        userImg.src = choiceUser.src
        userAtack.textContent = choiceUser.id
        
    })}

for(i=0; i<compTab.length ; i++)
{
    const choiceComp = document.createElement('img')
    choiceComp.setAttribute('data-id', i)
    choiceComp.setAttribute('src',compTab[i].img)
    choiceComp.setAttribute('name', compTab[i].name)
    choiceComp.setAttribute('id', compTab[i].atack)
    compTable.appendChild(choiceComp)
    choiceComp.classList.add('userchoice')
    choiceComp.addEventListener('click', () => {
        currentComp = choiceComp
        compName.textContent = choiceComp.name
        compImg.src = choiceComp.src
        compAtack.textContent = choiceComp.id
        
    }) 
}
    

function losowanieAreny ()
{
    btnArena.addEventListener('click',() =>{
        let losowaArena = arenaTab[Math.floor(Math.random() * arenaTab.length)];
        imgArena.src = losowaArena
    })
}
losowanieAreny()

btnFight.addEventListener('click',() => {
    let src = imgArena.getAttribute('src')
    if(!src)
    {
        backgroundArena.style.display = 'block'
        btnok.addEventListener('click',() => {
            backgroundArena.style.display = "none"
        })
        return;
    }
    fight()
})

    

        
    

function fight()
{
    let compA = compAtack.textContent
    let userA = userAtack.textContent
    let wynik = 0
    

    if( compA == 0)
    {
        backgroundStwor.style.display = 'block'
        btnokC.addEventListener('click',() => {
            backgroundStwor.style.display = "none"
        })
        return
    }
    
    if( userA == 0)
    {
        backgroundPostac.style.display = 'block'
        btnokU.addEventListener('click',() => {
            backgroundPostac.style.display = "none"
        })
        return
    }
    if(compA > userA)
    {
        wynik = compA - userA
        zycieUser = zycieUser - wynik
        healthUser.innerHTML = zycieUser
        resultComp.style.display = 'block'
        resultInnerComp.textContent = wynik
        exitBtnComp.addEventListener('click',() => {
            resultComp.style.display = 'none'
        })
    }
    if(compA < userA)
    {
        wynik = userA - compA
        zycieComp = zycieComp - wynik
        healthComp.innerHTML = zycieComp
        resultUser.style.display = "block"
        resultInner.textContent = wynik
        
        exitBtn.addEventListener('click',() => {
            resultUser.style.display = 'none'
        })
    }
    if(zycieUser < 75)
    {
        healthUser.style.color = "yellow"
    }
    if(zycieUser < 50)
    {
        healthUser.style.color = "orange"
    }
    if(zycieUser < 25)
    {
        healthUser.style.color = "red"
    }
    if(zycieUser < 0)
    {
        winnerComp.style.display = 'block'
        btnOnMoreC.addEventListener('click',() => {
            location.reload()
        })
    }
    if(zycieComp < 75)
    {
        healthComp.style.color = "yellow"
    } 
    if(zycieComp < 50)
    {
        healthComp.style.color = "orange"
    }
    if(zycieComp < 25)
    {
        healthComp.style.color = "red"
    }
    if(zycieComp < 0)
    {
        
        winnerUser.style.display = "block"
        btnOnMore.addEventListener('click',() =>{
            location.reload()
        })
    }
}









  