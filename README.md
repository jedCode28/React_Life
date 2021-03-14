# Starter Proj
TLDR: Each project needs its own git remote and database

Setup using the starter project is very similar to how we have cloned a project with two main differences.  First We need to rename our database in our `database.yml` (step 4).  This is because we are going to use this starter multiple times and will run into this issue where the database has already been created.  We can't do a rails db:drop because we could only have one db for any project using this app, so we really just need to rename the database to something unique like the name of our project

Secondly we need to remove the remote so we are not pointing to this starter repo and create a new git hub repo and add that remote to each project,



## Steps to setup and run

1. `git clone git@github.com:jimibue/react-rails-router-starter-f20.git <project-name>`
  - actually name your project when you clone

2. `cd project-name`
3. `bundle install`
4. in database.yml change name of database react_rails_router_starter_f20 to **project-name**
5. `rails db:create db:migrate db:seed`
6. `rails s -p 3001`

7. `cd client && yarn`
8. `yarn start`

### handle git

- you can either remove the remote and add you own, or you can remove the git repo(easier), - or - remove the
  remote keeps the commit history from starter project, and rm -rf .git is going to complete remove
  it/

1.  - remove origin `git remote rm origin`
    - git add remote origin sshlink-here-yo

2.  or
    `rm -rf .git`
    `git init`
    `git remote add origin sshlink-here-yo`
    `git add .`
    `git commit -m`
    `git push origin master`
