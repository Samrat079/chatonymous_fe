export type UserType = {
    id?: string;
    userName: string;
    password: string;
    dpUrl?: string;
    bio?: string;
    createdAt?: string;
    updatedAt?: string;
}

//public class UserModel {
//     @Id
//     private String id;
//
//     @NonNull
//     @Indexed(unique = true)
//     private String userName;
//
//     @NonNull
//     private String passWord;
//
//     private String dpUrl, bio;
//
//     @CreatedDate
//     private Instant createdAt;
//
//     @LastModifiedDate
//     private Instant updatedAt;
// }