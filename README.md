# Starter Proj

## Steps to setup and run

1. `git clone <git URL you wanna clone> <project-name>`
  - actually name your project when you clone

2. `cd project-name`
3. `bundle install`
4. in database.yml change name of old database to new <project-name>
5. `rails db:create db:migrate db:seed`
6. `rails s -p 3001`

7. `cd client && yarn`
8. `yarn start`

### handle git

- you can either remove the remote and add you own, or you can remove the git repo(easier), - or - remove the
  remote keeps the commit history from starter project, and rm -rf .git is going to complete remove
  it/

1. remove remote and add new one 
    - remove origin 
  
      `git remote rm origin`
    - Then add new remote 


     `git remote add origin <new Git SSH>`

--OR--

1.  or remove and recreate .git
   
    `rm -rf .git`

    `git init`

    `git remote add origin <new Git SSH>`

    `git add .`

    `git commit -m 'message' `

    `git push origin master`
