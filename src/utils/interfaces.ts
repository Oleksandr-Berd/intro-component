export interface IData {
firstName : string,
lastName: string,
email: string,
password: string,
}

export interface IProps {
    handleSubmit: (data:IData) => void,
}