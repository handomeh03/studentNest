export default function HeadOfTable(){
    return(
        <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0 "
                  >
                    ID
                  </th>
                  <th scope="col" className="px-3 py-3.5  text-center text-sm font-semibold text-gray-900 ">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                    date 
                  </th>
                  <th scope="col" className="px-3 py-3.5  text-sm text-center font-semibold text-gray-900 ">
                   phone Number
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                  address
                  </th>
                   <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                   email Verifed
                  </th>
                   <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                   adminVerifed
                  </th>
                   <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                    role
                  </th>
                   <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                    landlordGoId
                  </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                    cliqAccount
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                    Documnet
                  </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                    createdAt
                  </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900 ">
                    actions
                  </th>
                 
                </tr>
              </thead>
    );
}