import dayjs from "dayjs";
import { t } from "react-switch-lang";

export const dateFormat = "DD/MM/YYYY";
export const timeFormat = "HH:mm";

class TransactionModel{
    constructor(data){
        this.id=data?.id;
        this.entry_date=data?.entry_date;
        this.entry_time=data?.entry_time;
        this.amount=data?.amount;
        this.description=data?.description;
        this.type=data?.type;
        this.note=data?.note;
        this.categories=data?.categories
    }

    getDateAndTimeFormatted(){
        return dayjs(this.entry_date + " " + this.entry_time).format(`${dateFormat + ' ' +timeFormat}`);
    }

    getTypeName(){

        if(this.type==='expense'){
            return t('common.expense')
        }else if(this.type==='income'){
            return t('common.income')
        }
    }
}

export default TransactionModel;