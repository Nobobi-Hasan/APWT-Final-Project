import Employee from './Employee';

const EmployeeList = ({list, callback})=>{
    console.log(list);

    return(
        <div>
            {
                list.map((employee)=>{
                    return <Employee {...employee} adminEmployeeDeletecallback={callback} />
                })
            }
        </div>
    )
}

export default EmployeeList;