let Proposal = document.getElementById('Proposal')
let shadowpop  = document.getElementById('shadowpop')
let closes = document.getElementById('closes')

Proposal.addEventListener('click',function(){
    shadowpop.classList.remove('d-none')
})
closes.addEventListener('click',function(){
    shadowpop.classList.add('d-none')
})