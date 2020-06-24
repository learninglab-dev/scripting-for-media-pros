# Next steps

How will we manage branching and merging?

One proposal:

1. we each create a single named branch for ourselves (`mk`, `cc`, `mo`) and work in that ALL the time.
2. then we periodically merge that branch with the master locally and push directly back up to the master, i.e.
```
git checkout -b mk
#do all my stuff
git add .
git commit -m "did my changes"
git push origin mo #just to be safe
git checkout master
git pull #just to make sure I'm working with the updated master
git merge mk
git add .
git commit -m "merging mk branch"
git push origin master
```

Another proposal

1. we each create a single named branch for ourselves (`mk`, `cc`, `mo`) and work in that ALL the time.
2. then we periodically merge that branch with the master locally and push directly back up to the master, i.e.
```
git checkout -b mk
#do all my stuff
git add .
git commit -m "did my changes"
git push origin mo #just to be safe
