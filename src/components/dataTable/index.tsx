interface IProps {
  data: any; //TODO: Types need to be defined
}
const DataTable: React.FC<IProps> = ({data}) => {
  return <div>{data?.displayName}</div>;
};
export default DataTable;
