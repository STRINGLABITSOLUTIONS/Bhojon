import { AiOutlineHome } from 'react-icons/ai';
import { BiCube, BiLineChartDown } from 'react-icons/bi';
import { BsCart4, BsTags } from 'react-icons/bs';
import { FaFirstOrder, FaUser } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { RiSettings5Fill } from 'react-icons/ri';
import { SiProducthunt } from 'react-icons/si';
import { SlBriefcase } from 'react-icons/sl';

const dasboardMenus = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: <AiOutlineHome />,
    },
    {
        name: "Manage Order",
        link: "/dashboard/manage-order",
        icon: <FaFirstOrder />,
        subMenus: [
            {
                name: "Order List",
                link: "/dashboard/manage-order/order-list",
                icon: <FaFirstOrder />,
            },
            {
                name: "Pending Order",
                link: "/dashboard/manage-order/pending-order",
                icon: <FaFirstOrder />,
            },
            {
                name: "Complete Order",
                link: "/dashboard/manage-order/complete-order",
                icon: <FaFirstOrder />,
            },
            {
                name: "Cancel Order",
                link: "/dashboard/manage-order/cancel-order",
                icon: <FaFirstOrder />,
            },
        ],
    },
    {
        name: "Reservation",
        link: "/dashboard/reservation",
        icon: <BsTags />,
        subMenus: [
            {
                name: "Add Booking",
                link: "/dashboard/reservation/add-booking",
                icon: <BsTags />,
            },
            {
                name: "Reserved Day",
                link: "/dashboard/reservation/reserved-day",
                icon: <BsTags />,
            },
            {
                name: "Unavailable Day",
                link: "/dashboard/reservation/unavailable-day",
                icon: <BsTags />,
            },
            {
                name: "Reservation Settings",
                link: "/dashboard/reservation/reservation-settings",
                icon: <BsTags />,
            },
        ],
    },
    {
        name: "Purchase Manage",
        link: "/dashboard/purchase-manage",
        icon: <BsCart4 />,
        subMenus: [
            {
                name: "Purchase Item",
                link: "/dashboard/purchase-manage/purchase-item",
                icon: <BsCart4 />,
            },
            {
                name: "Add Purchase",
                link: "/dashboard/purchase-manage/add-purchase",
                icon: <BsCart4 />,
            },
            {
                name: "Purchase Return",
                link: "/dashboard/purchase-manage/purchase-return",
                icon: <BsCart4 />,
            },
            {
                name: "Return Invoice",
                link: "/dashboard/purchase-manage/return-invoice",
                icon: <BsCart4 />,
            },
            {
                name: "Supplier Manage",
                link: "/dashboard/purchase-manage/supplier-manage",
                icon: <BsCart4 />,
            },
            {
                name: "Supplier Ledger",
                link: "/dashboard/purchase-manage/supplier-ledger",
                icon: <BsCart4 />,
            },
            {
                name: "Stock Out Ingredients",
                link: "/dashboard/purchase-manage/stock-out-ingredients",
                icon: <BsCart4 />,
            },
        ],
    },
    {
        name: "Report",
        link: "/dashboard/report",
        icon: <BiLineChartDown />,
        subMenus: [
            {
                name: "Purchase Report",
                link: "/dashboard/report/purchase-report",
                icon: <BiLineChartDown />,
            },
            {
                name: "Stock Report",
                link: "/dashboard/report/stock-report",
                icon: <BiLineChartDown />,
            },
            {
                name: "Sell Report",
                link: "/dashboard/report/sell-report",
                icon: <BiLineChartDown />,
            },
            {
                name: "Cash Register Report",
                link: "/dashboard/report/cash-register-report",
                icon: <BiLineChartDown />,
            },
        ],
    },
    {
        name: "Food Management",
        link: "/dashboard/food-management",
        icon: <BiCube />,
        subMenus: [
            {
                name: "Manage Category",
                link: "/dashboard/food-management/manage-category",
                icon: <BiCube />,
                subSubMenus: [
                    {
                        name: "Add Category",
                        link: "/dashboard/food-management/manage-category/add-category",
                        icon: <BiCube />,
                    },
                    {
                        name: "Category List",
                        link: "/dashboard/food-management/manage-category/category-list",
                        icon: <BiCube />,
                    },
                ],
            },
            {
                name: "Manage Food",
                link: "/dashboard/food-management/manage-food",
                icon: <BiCube />,
                subSubMenus: [
                    {
                        name: "Add Food",
                        link: "/dashboard/food-management/manage-food/add-food",
                        icon: <BiCube />,
                    },
                    {
                        name: "Food Availability",
                        link: "/dashboard/food-management/manage-food/food-availability",
                        icon: <BiCube />,
                    },
                    {
                        name: "Add Food Group",
                        link: "/dashboard/food-management/manage-food/add-food-group",
                        icon: <BiCube />,
                    },
                    {
                        name: "Food List",
                        link: "/dashboard/food-management/manage-food/food-list",
                        icon: <BiCube />,
                    },
                    {
                        name: "Food Variant",
                        link: "/dashboard/food-management/manage-food/food-variant",
                        icon: <BiCube />,
                    },
                    {
                        name: "Menu Type",
                        link: "/dashboard/food-management/manage-food/menu-type",
                        icon: <BiCube />,
                    },
                ],
            },
        ],
    },
    {
        name: "Production",
        link: "/dashboard/production",
        icon: <SiProducthunt />,
        subMenus: [
            {
                name: "Add Production",
                link: "/dashboard/production/add-production",
                icon: <SiProducthunt />,
            },
            {
                name: "Production List",
                link: "/dashboard/production/production-list",
                icon: <SiProducthunt />,
            },
            {
                name: "Set Production Unit",
                link: "/dashboard/production/set-production-unit",
                icon: <SiProducthunt />,
            },
            {
                name: "Production Settings",
                link: "/dashboard/production/production-settings",
                icon: <SiProducthunt />,
            },
        ],
    },
    {
        name: "Settings",
        link: "/dashboard/settings",
        icon: <RiSettings5Fill />,
        subMenus: [
            {
                name: "Purchase Report",
                link: "/dashboard/settings/application-settings",
                icon: <RiSettings5Fill />,
            },
            {
                name: "Country",
                link: "/dashboard/settings/country",
                icon: <RiSettings5Fill />,
            },
            {
                name: "Currency",
                link: "/dashboard/settings/currency",
                icon: <RiSettings5Fill />,
            },
            {
                name: "Factory Reset",
                link: "/dashboard/settings/factory-reset",
                icon: <RiSettings5Fill />,
            },
            {
                name: "Language",
                link: "/dashboard/settings/language",
                icon: <RiSettings5Fill />,
            },
            {
                name: "Payroll Commission",
                link: "/dashboard/settings/pay-role-commission",
                icon: <RiSettings5Fill />,
            },
        ],
    },
    {
        name: "Accounts",
        link: "/dashboard/accounts",
        icon: <SlBriefcase />,
        subMenus: [
            {
                name: "Accounts Report",
                link: "/dashboard/accounts/accounts-report",
                icon: <SlBriefcase />,
            },
            {
                name: "Supplier Payment",
                link: "/dashboard/accounts/supplier-payment",
                icon: <SlBriefcase />,
            },
        ],
    },
    {
        name: "Human Resource",
        link: "/dashboard/human-resource",
        icon: <HiOutlineUserGroup />,
        subMenus: [
            {
                name: "Designation",
                link: "/dashboard/human-resource/designation",
                icon: <HiOutlineUserGroup />,
            },
            {
                name: "Add Employee",
                link: "/dashboard/human-resource/add-employee",
                icon: <HiOutlineUserGroup />,
            },
            {
                name: "Manage Employee",
                link: "/dashboard/human-resource/manage-employee",
                icon: <HiOutlineUserGroup />,
            },
            {
                name: "Manage Employee Salary",
                link: "/dashboard/human-resource/manage-employee-salary",
                icon: <HiOutlineUserGroup />,
            },
        ],
    },
    {
        name: "User Management",
        link: "/dashboard/user-management",
        icon: <FaUser />,
        subMenus: [
            {
                name: "Add User",
                link: "/dashboard/user-management/add-user",
                icon: <FaUser />,
            },
            {
                name: "User List",
                link: "/dashboard/user-management/user-list",
                icon: <FaUser />,
            },
        ],
    },
    {
        name: "User",
        link: "/user",
        icon: <AiOutlineHome />,
        subMenus: [
            {
                name: "Profile",
                link: "/user/profile",
                icon: <FaUser />,
            },
            {
                name: "Settings",
                link: "/user/settings",
                icon: <FaUser />,
            },
        ],
    },
    {
        name: "Authentication",
        link: "/authentication",
        icon: <AiOutlineHome />,
        subMenus: [
            {
                name: "Login",
                link: "/authentication/login",
                icon: <FaUser />,
            },
            {
                name: "Signup",
                link: "/authentication/signup",
                icon: <FaUser />,
            },
            {
                name: "Reset Password",
                link: "/authentication/reset-password",
                icon: <FaUser />,
            },
            {
                name: "Verify Email",
                link: "/authentication/verify-email",
                icon: <FaUser />,
            },
        ],
    },
];

export default dasboardMenus