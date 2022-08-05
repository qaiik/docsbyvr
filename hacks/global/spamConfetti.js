let x = prompt('How much confetti?\n\nOptions:\nbite size\nsmall\nmedium\nbig\ncomputer lagging').toLowerCase(); // checks size request
switch(x) { // switch on the above prompt, everything below changes in particleCount
    case "bite size": // if bite size
        confetti({particleCount: 500,spread: 500,origin: { y: 0.5}});
        break;
    case "small": // if small
        confetti({particleCount: 2500,spread: 500,origin: { y: 0.5}});
        break;
    case "medium": // if medium
        confetti({particleCount: 7500,spread: 500,origin: { y: 0.5}});
        break;
    case "big": // if big
        confetti({particleCount: 12500,spread: 500,origin: { y: 0.5}});
        break;
    case "computer lagging": // if lagging
        confetti({particleCount: 20000,spread: 500,origin: { y: 0.5}});
        break;
    default: // if none of those
        alert('Size not found!');
        break;
}
