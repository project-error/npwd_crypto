import React from 'react'
import CashValue from '@mui/icons-material/AttachMoney';
import SellIcon from '@mui/icons-material/Sell';
import Transfer from '@mui/icons-material/SubdirectoryArrowRight';
import {Divider, List, Box} from "@mui/material";
import {AvatarListItem} from "../components/AvatarListItem";
import styled from "styled-components";

interface Transaction {
  type: "bought" | "sold" | "transferred";
  amount: number
  value: number
}

const mockData: Transaction[] = [
  {
    type: "bought",
    amount: 69,
    value: 1000
  },
  {
    type: "sold",
    amount: 420,
    value: 42000
  },
  {
    type: "transferred",
    amount: 2,
    value: 180
  },
  {
    type: "bought",
    amount: 69,
    value: 1000
  },
  {
    type: "sold",
    amount: 420,
    value: 42000
  },
  {
    type: "transferred",
    amount: 2,
    value: 180
  },
  {
    type: "bought",
    amount: 69,
    value: 1000
  },
  {
    type: "sold",
    amount: 420,
    value: 42000
  },
  {
    type: "transferred",
    amount: 2,
    value: 180
  },
  {
    type: "bought",
    amount: 69,
    value: 1000
  },
  {
    type: "sold",
    amount: 420,
    value: 42000
  },
  {
    type: "transferred",
    amount: 2,
    value: 180
  },
]

function getListItem({type, amount, value}: Transaction) {
  switch (type) {
    case "bought":
      return <AvatarListItem
        heading={"Purchase"}
        text={`Bought ${amount} for $${value}`}
        icon={<SellIcon/>}
      />
    case "sold":
      return <AvatarListItem
        heading={"Sold"}
        text={`Sold ${amount} for $${value}`}
        icon={<CashValue/>}
      />
    case "transferred":
      return <AvatarListItem
        heading={"Transfer"}
        text={`Transferred ${amount} worth ${value}`}
        icon={<Transfer/>}
      />
  }
}

export const Transactions = () => {
  return (
    <Box sx={{
      display: "flex",
      height: "100%",
      flexDirection: "column"
    }}>
      <List dense sx={{
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden"
      }}>
        {
          mockData.map(transaction => (
            <>
              {getListItem(transaction)}
              <Divider/>
            </>
          ))
        }
      </List>
    </Box>
  )
}
