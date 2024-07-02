import { useEffect, useState } from "react";
import PolicyItem from "../../components/PolicyItem/PolicyItem";
import { ProfileNavbar } from "../../components/ProfileNavbar/ProfileNavbar";
import { Profile } from "../Profile/Profile";
import TopNav from "../../components/TopNav/TopNav";
import axios from "axios";
import { PolicyProps } from "../../../types/PolicyProps";

export const Policy = () => {
  const [allPolicies, setAllPolicies] = useState<PolicyProps[]>([]);
  const [filteredPolicies, setFilteredPolicies] = useState<PolicyProps[]>([]);
  const [selectedPolicy, setSelectedPolicy] = useState("all");
  const [activePolicy, setActivePolicy] = useState("active");
  const policyAPI = `https://e5e3-77-28-131-181.ngrok-free.app/api/policies`;

  useEffect(() => {
    fetch(policyAPI, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => {
        // Assuming res.json() is used to parse JSON response
        return res.json();
      })
      .then((data) => {
        // Assuming data is an array of policies or an object with policy data
        setAllPolicies(data.data);
        setFilteredPolicies(data.data);
      })
      .catch((error) => {
        // Handle any fetch errors here
        console.error("Error fetching policies:", error);
      });
  }, []);

  const handlePolicyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setActivePolicy(event.target.value);
    setSelectedPolicy(event.target.value);

    let filtered: PolicyProps[] = [];

    if (event.target.value === "active") {
      for (let i = 0; i < allPolicies.length; i++) {
        if (allPolicies[i].policy_status?.policy_status === "Активни") {
          filtered.push(allPolicies[i]);
        }
      }
    } else if (event.target.value === "notActive") {
      for (let i = 0; i < allPolicies.length; i++) {
        if (allPolicies[i].policy_status?.policy_status !== "Активни") {
          filtered.push(allPolicies[i]);
        }
      }
    } else if (event.target.value === "all") {
      filtered = allPolicies;
    } else if (event.target.value === "passenger") {
      for (let i = 0; i < allPolicies.length; i++) {
        if (allPolicies[i].policy?.policy_type === "Патничко") {
          filtered.push(allPolicies[i]);
        }
      }
    } else if (event.target.value === "car") {
      for (let i = 0; i < allPolicies.length; i++) {
        if (allPolicies[i].policy?.policy_type === "Кола") {
          filtered.push(allPolicies[i]);
        }
      }
    } else if (event.target.value === "bicycle") {
      for (let i = 0; i < allPolicies.length; i++) {
        if (allPolicies[i].policy?.policy_type === "Велосипед") {
          filtered.push(allPolicies[i]);
        }
      }
    }

    setFilteredPolicies(filtered);
    console.log(filtered);
  };

  return (
    <div className="flex">
      <ProfileNavbar />
      <div className="w-[100%] bg-[#d9d9d9]">
        <TopNav />
        <div className="flex justify-center content-center py-3">
          <div className="bg-white w-[95%] p-6 rounded-[16px]">
            <div className="rounded-[24px] overflow-hidden">
              <div className="bg-[#01A180] text-center text-[25px] font-semibold p-3 text-white">
                Полиси
              </div>

              <div className="py-6 flex justify-between">
                <div>
                  <select
                    className="px-[6rem] py-1 border-2 rounded-[8px] border-[#01A180] bg-white mr-6"
                    value={selectedPolicy}
                    onChange={(event) => handlePolicyChange(event)}
                  >
                    <option value="all">-- Изберете полиса --</option>
                    <option value="passenger">Патничко</option>
                    <option value="car">Кола</option>
                    <option value="bicycle">Велосипед</option>
                  </select>
                  <select
                    className="px-[6rem] py-1 border-2 rounded-[8px] border-[#01A180] bg-white"
                    value={activePolicy}
                    onChange={(event) => handlePolicyChange(event)}
                  >
                    <option value="active">Активни полиси</option>
                    <option value="notActive">Неактивни полиси</option>
                  </select>
                </div>
                <div>
                  <button className="bg-[#01A180] text-white text-md font-medium px-4 py-1 rounded-[8px]">
                    + Купи Полиса
                  </button>
                </div>
              </div>

              <div className="rounded-[24px] overflow-hidden">
                <table className="w-full text-center">
                  <thead className="bg-[#01A180] text-center text-white">
                    <tr>
                      <th className="p-3">Тип</th>
                      <th className="p-3">Број на полиса</th>
                      <th className="p-3">Пакет</th>
                      <th className="p-3">Бр. на лица</th>
                      <th className="p-3">Осигуреници</th>
                      <th className="p-3">Рок</th>
                      <th className="p-3">Цена</th>
                      <th className="p-3">Платено со</th>
                      <th className="p-3">Преземи</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPolicies.map((el) => (
                      <PolicyItem
                        key={el.policy_number} // Add a unique key
                        policy_number={el.policy_number}
                        policy_type={el.policy?.policy_type}
                        {...el}
                      />
                    ))}
                    <tr className="bg-[#01A180] text-center text-white">
                      <td className="p-3 text-lg font-medium" colSpan={9}>
                        Вкупен износ: ден
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
