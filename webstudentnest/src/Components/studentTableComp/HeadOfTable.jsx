export default function HeadOfTable(){
    return(
         <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 "
                  >
                    ID
                  </th>
                  <th scope="col" className="px-3 py-3.5  text-left text-sm font-semibold text-gray-900 ">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                   phoneNumber
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                  address
                  </th>
                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                   emailVerifed
                  </th>
                   
                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    role
                  </th>
                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    studentGovId
                  </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    major
                  </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    studentCardId
                  </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    graduateYear
                  </th>
                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    universityName
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                    Documnet
                  </th>
                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    createdAt
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ">
                    actions
                  </th>
                 
                </tr>
              </thead>
    );
}