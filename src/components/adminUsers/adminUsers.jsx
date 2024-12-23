import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h2>用戶管理</h2>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.image || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.username}>{user.username}</span>
            
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton}>移除</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
