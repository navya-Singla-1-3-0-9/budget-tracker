import React,{useContext} from 'react'
import useStyles from './style'
import {List as MUList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core';
import {Delete, MoneyOff } from '@material-ui/icons'

import { ExpenseTrackerContext } from '../../../context/context';
const Listx = () => {
    const classes =useStyles();
    const {deleteTransaction, transactions}= useContext(ExpenseTrackerContext);

   /* const transactions= [{id:1,type:"income", category:'Salary', amount:50, date:"Wed Oct 10"},
    {id:2,type:"expense", category:'Food', amount:30, date:"Wed Oct 10"},
    {id:3,type:"income", category:'Salary', amount:50, date:"Wed Oct 10"},
    {id:4,type:"expense", category:'Medicine', amount:21, date:"Wed Oct 10"}];*/


    return (
       <MUList dense={false} className={classes.list}>
           {
               transactions.map(transaction=>{
                   return(<Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                       <ListItem>
                           <ListItemAvatar>
                               {console.log(transaction.type)}
                               <Avatar className={transaction.type=='Income'?classes.avatarIncome:classes.avatarExpense}>
                                    <MoneyOff/>
                                  
                               </Avatar>
                             

                           </ListItemAvatar>
                           <ListItemText primary={transaction.category} secondary={`$ ${transaction.amount} - ${transaction.date}`}>

                           </ListItemText>
                           <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                       </ListItem>

                   </Slide>);
               })
           }
       </MUList>
    )
}

export default Listx
