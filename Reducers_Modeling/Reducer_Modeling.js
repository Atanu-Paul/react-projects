console.clear();
//creating only actions in redux

//people dropping a form (redux actions)
const createPolicy=(name,amount)=>{
  return {
    //creating an action
    type: "CREATE_POLICY",
    payload:{
      name: name,
      amount: amount
    }
  };
};

//people making a claim (redux actions)
const createClaim=(name,claim_amt)=>{
  return{
    type:'CREATE_CLAIM',
    payload:{
      name:name,
      claim_amount:claim_amt
    }
  };
};

//people cancelling policy (redux actions)
const deletePolicy=(name)=>{
  return{
    type:'DELETE_POLICY',
    payload:{
      name:name
    }
  };
};

// creating Reducers functions
//oldListOfClaims is the original state record that is coming form
//the redux central state store so that we can manipulate it based
//on the action type and send it back to the central redux store.
const claimsHistory=(oldListOfClaims=[],action)=>{
    if(action.type==='CREATE_CLAIM'){
        //then we perform the neccsesarry action
       //we care about this action(FORM)
      return [...oldListOfClaims,action.payload];
    }
    //if not then we dont care i.e perform the necassary action
  return oldListOfClaims;
};

const accounting=(bagOfMoney = 5000,action)=>{
  if(action.type==='CREATE_CLAIM'){
    return bagofMoney-actiion.payload.claim_amount;
  } else if(action.type==='CREATE_POLICY'){
    return bagOfMoney+action.payload.amount;
  }
  return bagOfMoney;
};
//Note:Only created the reducer functions so far.